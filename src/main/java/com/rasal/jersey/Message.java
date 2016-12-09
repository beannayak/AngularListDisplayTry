package com.rasal.jersey;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.rasal.dao.SongsDAO;

@Path("/message")
public class Message {
	
	@GET
	@Produces (MediaType.APPLICATION_JSON)
	public Response getMsg() {
		return Response.ok(SongsDAO.getListOfSongs()).build();
	}
}