package com.paperrockscissors.game.model;

public class ResponseModel {

	private String resultat;
	private String userMove;
	private String computerMove;

	public String getResultat() {
		return resultat;
	}

	public void setResultat(String resultat) {
		this.resultat = resultat;
	}

	public String getUserMove() {
		return userMove;
	}

	public void setUserMove(String userMove) {
		this.userMove = userMove;
	}

	public String getComputerMove() {
		return computerMove;
	}

	public void setComputerMove(String computerMove) {
		this.computerMove = computerMove;
	}

	@Override
	public String toString() {
		return "ResponseModel [resultat=" + resultat + ", userMove=" + userMove + ", computerMove=" + computerMove
				+ "]";
	}

}
