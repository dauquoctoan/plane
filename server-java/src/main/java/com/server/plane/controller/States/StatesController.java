
package com.server.plane.controller.States;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.States.*;

@RestController
@RequestMapping("/api/states")
@RequiredArgsConstructor
@Tag(name = "States")
public class StatesController {

    @PostMapping
    @Operation(summary = "Create states")
    public StatesResponse create(
        @RequestBody StatesCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update states")
    public StatesResponse update(
        @PathVariable Long id,
        @RequestBody StatesUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete states")
    public void delete(
        @RequestBody StatesDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id states")
    public StatesResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all states")
    public List<StatesResponse> list() {
        return null;
    }
}
