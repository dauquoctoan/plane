
package com.server.plane.controller.IssueBlockers;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.IssueBlockers.*;

@RestController
@RequestMapping("/api/issueBlockers")
@RequiredArgsConstructor
@Tag(name = "IssueBlockers")
public class IssueBlockersController {

    @PostMapping
    @Operation(summary = "Create issueBlockers")
    public IssueBlockersResponse create(
        @RequestBody IssueBlockersCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update issueBlockers")
    public IssueBlockersResponse update(
        @PathVariable Long id,
        @RequestBody IssueBlockersUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete issueBlockers")
    public void delete(
        @RequestBody IssueBlockersDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id issueBlockers")
    public IssueBlockersResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all issueBlockers")
    public List<IssueBlockersResponse> list() {
        return null;
    }
}
