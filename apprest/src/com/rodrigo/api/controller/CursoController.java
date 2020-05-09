package com.rodrigo.api.controller;

import java.util.ArrayList;
import java.util.logging.Logger;

import javax.servlet.ServletContext;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.rodrigo.model.Curso;
import com.rodrigo.model.dao.repo.CursoDAO;

@Path("/cursos")
@Produces("application/json")
@Consumes("application/json")
public class CursoController {
	
	private static final Logger LOGGER = Logger.getLogger(CursoController.class.getCanonicalName());
	
	private static CursoDAO cursoDAO = CursoDAO.getInstance();

	
	@Context
	private ServletContext context;
	
	public CursoController() {
		super();
	}

	@GET
	public Response GetAll(@QueryParam("filtro") String filtro) {
		
		LOGGER.info("@GET: All Curso" + filtro);
		ArrayList<Curso> registros = new ArrayList<Curso>();
		
		if(filtro != null && !"".equals(filtro.trim())) {
			
			registros = (ArrayList<Curso>) cursoDAO.getAllLikeNombre(filtro);
			
		}else {
			
			registros = (ArrayList<Curso>) cursoDAO.getAll();
		}
		
		Response response = Response.status(Status.OK).entity(registros).build();
		
		return response;		
	}
}
