package com.ex.meme.entities;

import java.util.Collection;

public class TokenDTO
{
    private String idToken;
    private String userName;
    private Collection roles;
    private int userId;

    public TokenDTO() { }

    public Collection getRoles() {
        return roles;
    }

    public void setRoles(Collection roles) {
        this.roles = roles;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getIdToken() {
        return idToken;
    }

    public void setIdToken(String idToken) {
        this.idToken = idToken;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "TokenDTO{" +
                "idToken='" + idToken + '\'' +
                ", userName='" + userName + '\'' +
                ", roles=" + roles +
                ", userId=" + userId +
                '}';
    }
}
