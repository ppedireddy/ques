package com.ques;

import java.io.BufferedOutputStream;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileOutputStream;

import org.apache.commons.io.IOUtils;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ques.dto.Questions;
//import com.savyavam.studs.service.UserService;
import com.ques.opennls.QuesGen;

@RestController
public class QuestionRestController {

	/*@Autowired
	UserService userService; */// Service which will do all data
								// retrieval/manipulation work
	
	/**
	 * Upload single file using Spring Controller
	 */
	@RequestMapping(value = "/uploadFile", method = RequestMethod.POST,produces=MediaType.APPLICATION_XML_VALUE)
	public @ResponseBody Questions uploadFileHandler(@RequestParam("file") MultipartFile file) {
		String name="file1";
		if (!file.isEmpty()) {
			try {
				byte[] bytes = file.getBytes();
						
				// Creating the directory to store file
				String rootPath = System.getProperty("catalina.home");
				File dir = new File(rootPath + File.separator + "tmpFiles");
				if (!dir.exists())
					dir.mkdirs();

				// Create the file on server
				File serverFile = new File(dir.getAbsolutePath()
						+ File.separator + name);
				BufferedOutputStream stream = new BufferedOutputStream(
						new FileOutputStream(serverFile));
				stream.write(bytes);
				stream.close();

				System.out.println("Server File Location="
						+ serverFile.getAbsolutePath());

				ByteArrayInputStream baistream = new   ByteArrayInputStream(file.getBytes());
				String text = IOUtils.toString(baistream, "UTF-8");
				
				QuesGen quesGen = new QuesGen();
				Questions questions = quesGen.getQues(text);
				return questions;
			} catch (Exception e) {
				e.printStackTrace();
				//return "You failed to upload " + name + " => " + e.getMessage();
				return null;
			}
		} else {
			System.out.println("You failed to upload " + name
					+ " because the file was empty.");
			//return "You failed to upload " + name	+ " because the file was empty.";
			
			return null;
		}
		
	}

	/**
	 * Upload multiple file using Spring Controller
	 */
	@RequestMapping(value = "/uploadMultipleFile", method = RequestMethod.POST)
	public @ResponseBody
	String uploadMultipleFileHandler(@RequestParam("name") String[] names,
			@RequestParam("file") MultipartFile[] files) {

		if (files.length != names.length)
			return "Mandatory information missing";

		String message = "";
		for (int i = 0; i < files.length; i++) {
			MultipartFile file = files[i];
			String name = names[i];
			try {
				byte[] bytes = file.getBytes();

				// Creating the directory to store file
				String rootPath = System.getProperty("catalina.home");
				File dir = new File(rootPath + File.separator + "tmpFiles");
				if (!dir.exists())
					dir.mkdirs();

				// Create the file on server
				File serverFile = new File(dir.getAbsolutePath()
						+ File.separator + name);
				BufferedOutputStream stream = new BufferedOutputStream(
						new FileOutputStream(serverFile));
				stream.write(bytes);
				stream.close();

				System.out.println("Server File Location="
						+ serverFile.getAbsolutePath());

				message = message + "You successfully uploaded file=" + name
						+ "";
			} catch (Exception e) {
				return "You failed to upload " + name + " => " + e.getMessage();
			}
		}
		return message;
	}
	
	
}