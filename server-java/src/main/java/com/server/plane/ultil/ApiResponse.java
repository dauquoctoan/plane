package com.server.plane.ultil;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Schema(description = "Standard API response")
public class ApiResponse<T> {

    @Schema(example = "true")
    private boolean success;

    @Schema(example = "0")
    private int code;

    @Schema(example = "OK")
    private String message;

    private T data;
}