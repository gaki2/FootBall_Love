package com.deu.football_love.dto;

import com.deu.football_love.domain.Address;
import com.deu.football_love.domain.Company;
import com.deu.football_love.domain.Member;
import lombok.Getter;

@Getter
public class CompanyDto {

    private Long companyId;
    private Long owner;
    private String companyName;
    private Address location;
    private String tel;
    private String description;

    public CompanyDto(Long id, String name, Long owner, Address location, String tel, String description) {
        this.companyId = id;
        this.companyName = name;
        this.owner = owner;
        this.location = location;
        this.tel = tel;
        this.description = description;
    }

    public static CompanyDto from(Company company)
    {
        return new CompanyDto(company.getId(), company.getName(), company.getOwner().getNumber(), company.getLocation(),company.getTel(), company.getDescription());
    }
}
