
package com.server.plane.controller.CommentReaction;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.CommentReaction.*;

@RestController
@RequestMapping("/api/commentReaction")
@RequiredArgsConstructor
@Tag(name = "CommentReaction")
public class CommentReactionController {

    @PostMapping
    @Operation(summary = "Create commentReaction")
    public CommentReactionResponse create(
        @RequestBody CommentReactionCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update commentReaction")
    public CommentReactionResponse update(
        @PathVariable Long id,
        @RequestBody CommentReactionUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete commentReaction")
    public void delete(
        @RequestBody CommentReactionDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id commentReaction")
    public CommentReactionResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all commentReaction")
    public List<CommentReactionResponse> list() {
        return null;
    }
}
