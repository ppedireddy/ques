package com.ques.dto;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
 
@XmlRootElement (name = "fillInTheBlanks")
@XmlAccessorType(XmlAccessType.NONE)
public class FillInTheBlanks implements Serializable
{
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@XmlElement
	private String[] Question;

    public String[] getQuestion ()
    {
        return Question;
    }

    public void setQuestion (String[] Question)
    {
        this.Question = Question;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [Question = "+Question+"]";
    }
}
		