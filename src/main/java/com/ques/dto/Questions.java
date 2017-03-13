package com.ques.dto;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;


@XmlRootElement (name = "questions")
@XmlAccessorType(XmlAccessType.NONE)
public class Questions implements Serializable
{
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@XmlElement
	private FillInTheBlanks FillInTheBlanks;
	@XmlElement
    private Straight Straight;
	@XmlElement
    private MultipleChoice MultipleChoice;

    public FillInTheBlanks getFillInTheBlanks ()
    {
        return FillInTheBlanks;
    }

    public void setFillInTheBlanks (FillInTheBlanks FillInTheBlanks)
    {
        this.FillInTheBlanks = FillInTheBlanks;
    }

    public Straight getStraight ()
    {
        return Straight;
    }

    public void setStraight (Straight Straight)
    {
        this.Straight = Straight;
    }

    public MultipleChoice getMultipleChoice ()
    {
        return MultipleChoice;
    }

    public void setMultipleChoice (MultipleChoice MultipleChoice)
    {
        this.MultipleChoice = MultipleChoice;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [FillInTheBlanks = "+FillInTheBlanks+", Straight = "+Straight+", MultipleChoice = "+MultipleChoice+"]";
    }
}
