
package com.server.plane.controller.IssueActivities;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.IssueActivities.*;

@RestController
@RequestMapping("/api/issueActivities")
@RequiredArgsConstructor
@Tag(name = "IssueActivities")
public class IssueActivitiesController {

    @PostMapping
    @Operation(summary = "Create issueActivities")
    public IssueActivitiesResponse create(
        @RequestBody IssueActivitiesCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update issueActivities")
    public IssueActivitiesResponse update(
        @PathVariable Long id,
        @RequestBody IssueActivitiesUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete issueActivities")
    public void delete(
        @RequestBody IssueActivitiesDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id issueActivities")
    public IssueActivitiesResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all issueActivities")
    public List<IssueActivitiesResponse> list() {
        return null;
    }
}
