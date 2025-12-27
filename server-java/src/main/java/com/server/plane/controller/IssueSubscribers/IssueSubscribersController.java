
package com.server.plane.controller.IssueSubscribers;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.IssueSubscribers.*;

@RestController
@RequestMapping("/api/issueSubscribers")
@RequiredArgsConstructor
@Tag(name = "IssueSubscribers")
public class IssueSubscribersController {

    @PostMapping
    @Operation(summary = "Create issueSubscribers")
    public IssueSubscribersResponse create(
        @RequestBody IssueSubscribersCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update issueSubscribers")
    public IssueSubscribersResponse update(
        @PathVariable Long id,
        @RequestBody IssueSubscribersUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete issueSubscribers")
    public void delete(
        @RequestBody IssueSubscribersDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id issueSubscribers")
    public IssueSubscribersResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all issueSubscribers")
    public List<IssueSubscribersResponse> list() {
        return null;
    }
}
