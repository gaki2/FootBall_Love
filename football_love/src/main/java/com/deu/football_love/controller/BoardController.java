package com.deu.football_love.controller;

import com.deu.football_love.dto.board.AddBoardRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.deu.football_love.dto.board.BoardDto;
import com.deu.football_love.service.BoardServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class BoardController {

    private final BoardServiceImpl boardService;

    @PostMapping("/team/{teamName}/board")
    public ResponseEntity add(@PathVariable("teamName") String teamName, @RequestBody AddBoardRequest request) {
        if (boardService.add(request) != null) {
            return new ResponseEntity(HttpStatus.OK);
        } else {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/team/{teamName}/board/{boardId}")
    public ResponseEntity delete(Long boardId) {
        boardService.delete(boardId);
        return new ResponseEntity(HttpStatus.OK);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity serverException() {
        return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
