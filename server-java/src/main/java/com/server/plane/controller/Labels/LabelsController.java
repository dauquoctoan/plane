
package com.server.plane.controller.Labels;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.Labels.*;

@RestController
@RequestMapping("/api/labels")
@RequiredArgsConstructor
@Tag(name = "Labels")
public class LabelsController {

    @PostMapping
    @Operation(summary = "Create labels")
    public LabelsResponse create(
        @RequestBody LabelsCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update labels")
    public LabelsResponse update(
        @PathVariable Long id,
        @RequestBody LabelsUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete labels")
    public void delete(
        @RequestBody LabelsDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id labels")
    public LabelsResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all labels")
    public List<LabelsResponse> list() {
        return null;
    }
}
