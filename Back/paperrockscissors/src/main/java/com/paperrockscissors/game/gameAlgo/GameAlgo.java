package com.paperrockscissors.game.gameAlgo;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import org.springframework.stereotype.Component;

import com.paperrockscissors.game.model.ResponseModel;


@Component
public class GameAlgo {
	
	private static final Map<String, Map<String, String>> choicesObject = new HashMap<>();
	
	private ResponseModel responseModel;

    static {
        Map<String, String> rockRules = new HashMap<>();
        rockRules.put("rock", "draw");
        rockRules.put("scissors", "win");
        rockRules.put("paper", "lose");

        Map<String, String> scissorRules = new HashMap<>();
        scissorRules.put("rock", "lose");
        scissorRules.put("scissors", "draw");
        scissorRules.put("paper", "win");

        Map<String, String> paperRules = new HashMap<>();
        paperRules.put("rock", "win");
        paperRules.put("scissors", "lose");
        paperRules.put("paper", "draw");

        choicesObject.put("rock", rockRules);
        choicesObject.put("scissors", scissorRules);
        choicesObject.put("paper", paperRules);
    }
    
    public String userChoice(int userchoice) {
    	String move = "";
		if (userchoice == 1)
			move = "Paper";
		else if (userchoice == 2)
			move = "Rock";
		else if (userchoice == 3)
			move = "Scissors";
		
		return move;
    }
    
    public String computerChoice() {
    	String[] choices = {"rock", "paper", "scissors"};
        responseModel= new ResponseModel();
        Random random = new Random(); 
        int num = random.nextInt(3);
        String computerChoice = choices[num];
        System.out.println("computerChoice == " + " --> " + computerChoice);
        return computerChoice;
    }
    
	public ResponseModel gameAlgo(String userchoice,String computerChoice) {
        
        String result;
        switch (choicesObject.get(userchoice).get(computerChoice)) {
            case "win":
                result = "GREEN";
                break;
            case "lose":
                result = "RED";
                break;
            default:
                result = "BLUE";
                break;
        }

        responseModel.setComputerMove(computerChoice);
        responseModel.setUserMove(userchoice);
        responseModel.setResultat(result);
        return responseModel;
    }
    
}
