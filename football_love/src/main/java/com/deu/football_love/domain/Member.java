package com.deu.football_love.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Member {
	@Id
	@Column(name = "member_id", length = 20)
	private String id;

	@Column(name = "member_pwd", length = 150)
	private String pwd;

	@Column(name = "member_birth")
	private LocalDate birth;

	@Column(name = "member_address")
	@Embedded
	private Address address;

	@Column(name = "member_email")
	private String Email;

	@Column(name = "member_phone")
	private String phone;

	@Column(name = "member_creatdate")
	private LocalDateTime createDate;

	@OneToMany(mappedBy = "author")
	private List<Post> posts = new ArrayList<>();

	@OneToMany(mappedBy = "member")
	private List<TeamAdmin> admins =new ArrayList<>();

	@OneToMany(mappedBy = "member")
	private List<TeamMember> teamMembers = new ArrayList<>();


}
