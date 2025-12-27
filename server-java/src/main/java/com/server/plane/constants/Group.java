package com.server.plane.constants;

public enum Group {
    BACKLOG("backlog"),
    UNSTARTED("unstarted"),
    STARTED("started"),
    COMPLETED("completed"),
    CANCELLED("cancelled");

    private final String value;

    Group(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}