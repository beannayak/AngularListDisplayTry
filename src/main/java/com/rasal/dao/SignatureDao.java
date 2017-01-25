package com.rasal.dao;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.rasal.domain.Signature;

@Repository
@Transactional (propagation = Propagation.MANDATORY)
public class SignatureDao {
	@Autowired
	private SessionFactory sf;
	
	public Signature getSignatureById(long id) {
		return sf.getCurrentSession().get(Signature.class, id);
	}
	
	public long create(Signature signature) {
		return (long)sf.getCurrentSession().save(signature);
	}
	
	public Signature update(Signature signature) {
		return (Signature) sf.getCurrentSession().merge(signature);
	}
	
	public Signature delete(long id){
		Signature signature = getSignatureById(id);
		sf.getCurrentSession().delete(signature);
		return signature;
	}
}
