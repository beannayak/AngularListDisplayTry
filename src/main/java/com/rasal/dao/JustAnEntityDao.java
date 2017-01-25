package com.rasal.dao;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.rasal.domain.JustAnEntity;

@Repository
@Transactional (propagation = Propagation.MANDATORY)
public class JustAnEntityDao {
	@Autowired
	private SessionFactory sf;
	
	public void create(JustAnEntity jae) {
		sf.getCurrentSession().save(jae);
	}
	
	public JustAnEntity update(JustAnEntity jae) {
		return (JustAnEntity)sf.getCurrentSession().merge(jae);
	}
	
	public JustAnEntity getEntityById(long id) {
		return sf.getCurrentSession().get(JustAnEntity.class, id);
	}
	
	public JustAnEntity delete(long id) {
		JustAnEntity jae = getEntityById(id);
		sf.getCurrentSession().delete(jae);
		return jae;
	}
}
