package com.ques.dto;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
 
@XmlRootElement (name = "multipleChoice")
@XmlAccessorType(XmlAccessType.NONE)
public class MultipleChoice implements Serializable
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@XmlElement
    private String[] Question;
	@XmlElement
    private Choices[] Choices;

    public String[] getQuestion ()
    {
        return Question;
    }

    public void setQuestion (String[] Question)
    {
        this.Question = Question;
    }

    public Choices[] getChoices ()
    {
        return Choices;
    }

    public void setChoices (Choices[] Choices)
    {
        this.Choices = Choices;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [Question = "+Question+", Choices = "+Choices+"]";
    }
}