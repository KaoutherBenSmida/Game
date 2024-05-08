package com.paperrockscissors.game.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paperrockscissors.game.gameAlgo.GameAlgo;
import com.paperrockscissors.game.model.ResponseModel;

@RestController
@CrossOrigin(origins = "*" )
public class RockPaperScissorsController {

	@Autowired
	private GameAlgo gameAlgo;

	private ResponseModel responseModel;

	@PostMapping(value = "/rockpaperscissors/{choice}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseModel rockPaperScissors(@PathVariable int choice) {
		String userMove = gameAlgo.userChoice(choice);
		String computerMove = gameAlgo.computerChoice();
		responseModel = new ResponseModel();
		responseModel = gameAlgo.gameAlgo(userMove.toLowerCase(), computerMove.toLowerCase());
		System.out.println(responseModel.toString());
		return responseModel;
	}

	@GetMapping(value = "/getTest", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseModel getTest() {
		responseModel = new ResponseModel();
		responseModel.setResultat("Connection établie");

		return responseModel;
	}
}
