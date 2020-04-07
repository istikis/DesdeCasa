package com.rodrigo.api.controller;

import java.util.ArrayList;
import java.util.logging.Logger;

import javax.servlet.ServletContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;

import com.rodrigo.model.Persona;

@Path("/personas")
@Produces("application/json")
@Consumes("application/json")
public class PersonaController {

	private static final Logger LOGGER = Logger.getLogger(PersonaController.class.getCanonicalName());
	
	@Context
	private ServletContext context;
	
	private static ArrayList<Persona> personas = new ArrayList<Persona>();
	
	
	
	
	public PersonaController() {
		super();
		personas.add( new Persona(1,"Arantxa","avatar1.png", "m") );
		personas.add( new Persona(2,"Idoia","avatar2.png", "m") );
		personas.add( new Persona(3,"Iker","avatar3.png", "h") );
		personas.add( new Persona(4,"Hodei","avatar4.png", "m") );
		personas.add( new Persona(5,"Rodrigo","avatar5.png", "h") );
	}


	@GET
	public ArrayList<Persona> getAll() {	
		LOGGER.info("getAll");
		return personas;
	}
	
	
}
