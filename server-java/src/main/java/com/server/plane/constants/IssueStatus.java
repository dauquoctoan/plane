package com.server.plane.constants;

public enum IssueStatus {
    PENDING(-2),
    REJECTED(-1),
    SNOOZED(0),
    ACCEPTED(1),
    DUPLICATE(2);

    private final int code;

    IssueStatus(int code) {
        this.code = code;
    }

    public int getCode() {
        return code;
    }
}