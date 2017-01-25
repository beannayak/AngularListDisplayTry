package com.rasal.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Signature {
	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	private long id;
	
	private String name;
	
	private String signature;

	public Signature() {
	}
	
	public Signature(String name, String signature) {
		this.name = name;
		this.signature = signature;
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSignature() {
		return signature;
	}

	public void setSignature(String signature) {
		this.signature = signature;
	}
}
