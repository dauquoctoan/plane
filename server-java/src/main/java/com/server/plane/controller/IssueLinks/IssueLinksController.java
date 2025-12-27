
package com.server.plane.controller.IssueLinks;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.IssueLinks.*;

@RestController
@RequestMapping("/api/issueLinks")
@RequiredArgsConstructor
@Tag(name = "IssueLinks")
public class IssueLinksController {

    @PostMapping
    @Operation(summary = "Create issueLinks")
    public IssueLinksResponse create(
        @RequestBody IssueLinksCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update issueLinks")
    public IssueLinksResponse update(
        @PathVariable Long id,
        @RequestBody IssueLinksUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete issueLinks")
    public void delete(
        @RequestBody IssueLinksDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id issueLinks")
    public IssueLinksResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all issueLinks")
    public List<IssueLinksResponse> list() {
        return null;
    }
}
