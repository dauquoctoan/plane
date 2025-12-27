package com.server.plane.constants;

public enum Role {
    GUEST(5),
    MEMBER(10),
    ADMIN(15),
    OWNER(20);

    private final int code;

    Role(int code) {
        this.code = code;
    }

    public int getCode() {
        return code;
    }
}