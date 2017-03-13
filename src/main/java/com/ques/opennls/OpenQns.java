package com.ques.opennls;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.ArrayList;

//import antlr.collections.List;
import opennlp.tools.namefind.NameFinderME;
import opennlp.tools.namefind.TokenNameFinderModel;
import opennlp.tools.sentdetect.SentenceDetectorME;
import opennlp.tools.sentdetect.SentenceModel;
import opennlp.tools.tokenize.SimpleTokenizer;
import opennlp.tools.tokenize.Tokenizer;
import opennlp.tools.util.Span;


public class OpenQns {

	ArrayList<String> getNameEntities(String text) throws FileNotFoundException {

		ArrayList<String> namesList = new ArrayList<String>();
		String[] names = null;
		System.out.println(new File(".").getAbsoluteFile());
		InputStream modelIn = new FileInputStream("en-sent.bin");

		try {
			SentenceModel sentencemodel = new SentenceModel(modelIn);

			SentenceDetectorME sentenceDetector = new SentenceDetectorME(
					sentencemodel);

			String sentences[] = sentenceDetector.sentDetect(text);

			
			// Load the model file downloaded from OpenNLP
			// http://opennlp.sourceforge.net/models-1.5/en-ner-person.bin
			TokenNameFinderModel nameModel = new TokenNameFinderModel(new File(
					"en-ner-person.bin"));

			// Create a NameFinder using the model
			NameFinderME finder = new NameFinderME(nameModel);

			Tokenizer tokenizer = SimpleTokenizer.INSTANCE;

			for (String sentence : sentences) {
				System.out.println("sentence = "+sentence);
				// Split the sentence into tokens
				String[] tokens = tokenizer.tokenize(sentence);

				// Find the names in the tokens and return Span objects
				Span[] nameSpans = finder.find(tokens);
				
				// Print the names extracted from the tokens using the Span data
				names = Span.spansToStrings(nameSpans, tokens);
				for(String nameStr: names ){
					namesList.add(nameStr);
				System.out.println("names = "+nameStr);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return namesList;

	}
}
