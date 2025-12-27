
package com.server.plane.controller.IssueVotes;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.IssueVotes.*;

@RestController
@RequestMapping("/api/issueVotes")
@RequiredArgsConstructor
@Tag(name = "IssueVotes")
public class IssueVotesController {

    @PostMapping
    @Operation(summary = "Create issueVotes")
    public IssueVotesResponse create(
        @RequestBody IssueVotesCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update issueVotes")
    public IssueVotesResponse update(
        @PathVariable Long id,
        @RequestBody IssueVotesUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete issueVotes")
    public void delete(
        @RequestBody IssueVotesDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id issueVotes")
    public IssueVotesResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all issueVotes")
    public List<IssueVotesResponse> list() {
        return null;
    }
}
