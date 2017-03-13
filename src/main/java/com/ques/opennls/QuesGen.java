package com.ques.opennls;

import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;

import com.ques.dto.Questions;
import com.ques.dto.Straight;

public class QuesGen {

	public Questions getQues(String text) throws FileNotFoundException {

		Questions questions = new Questions();
		List<String> questionlist = new ArrayList<String>();
		String question = "";

			List<String> names = new OpenQns().getNameEntities(text);

		for (String name : names) {
			question = "Who is " + name + "?";
			questionlist.add(question);
		}
		String[] questionArray = questionlist.toArray(new String[0]);
		Straight straight = new Straight();
		straight.setQuestion(questionArray);
		questions.setStraight(straight);
		return questions;
	}
}