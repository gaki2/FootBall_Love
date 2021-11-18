package com.deu.football_love.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import org.springframework.data.annotation.CreatedDate;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Member {
	@Id
	@Column(name = "member_id", length = 20)
	private String id;

	@Column(name = "member_pwd", length = 150)
	private String pwd;

	@Column(name = "member_nickname", length = 20)
	private String nickname;

	@Column(name = "member_name", length = 20)
	private String name;

	@Column(name = "member_birth")
	private LocalDate birth;

	@Column(name = "member_address")
	@Embedded
	private Address address;

	@Column(name = "member_email")
	private String email;

	@Column(name = "member_phone")
	private String phone;

	@Column(name = "member_creatdate")
	private LocalDateTime createDate;

	@OneToMany(mappedBy = "author")
	private List<Post> posts = new ArrayList<>();

	@OneToMany(mappedBy = "member" , cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
	private List<TeamMember> teamMembers = new ArrayList<>();

	@OneToMany(mappedBy = "member")
	private List<ParticipationMember> participationMembers = new ArrayList<>();

	@OneToMany(mappedBy = "member")
	private List<ApplicationJoinTeam> applicationJoinTeams = new ArrayList<>();

	@OneToOne(mappedBy = "member")
	private WithdrawalMember withdrawalMember;

}
