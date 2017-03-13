package com.ques.dto;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;


@XmlRootElement (name = "choices")
@XmlAccessorType(XmlAccessType.NONE)
public class Choices implements Serializable
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@XmlElement
    private String Choice;

    public String getChoice ()
    {
        return Choice;
    }

    public void setChoice (String Choice)
    {
        this.Choice = Choice;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [Choice = "+Choice+"]";
    }
}