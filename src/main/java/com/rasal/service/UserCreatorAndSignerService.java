package com.rasal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.rasal.dao.JustAnEntityDao;
import com.rasal.dao.SignatureDao;
import com.rasal.domain.JustAnEntity;
import com.rasal.domain.Signature;

@Service
@Transactional (propagation = Propagation.REQUIRES_NEW)
public class UserCreatorAndSignerService {

	@Autowired
	private JustAnEntityDao justAnEntityDao;
	
	@Autowired
	private SignatureDao signatureDao;
	
	public void createUserAndSignTheDeedDocuments(JustAnEntity entity, String signature, boolean shouldThrowException) {
		justAnEntityDao.create(entity);
		exceptionThrowingMethod(shouldThrowException);
		Signature sign = new Signature(entity.getName(), signature);
		signatureDao.create(sign);
	}
	
	private void exceptionThrowingMethod(boolean shouldThrowException) {
		if (shouldThrowException){
			throw new RuntimeException("Did someone order EXCEPTION?");
		}
	}
}
