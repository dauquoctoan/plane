package com.server.plane.constants;

public enum Access {
    PRIVATE(0),
    PUBLIC(1);

    private final int code;
    Access(int code) { this.code = code; }
    public int getCode() { return code; }
}