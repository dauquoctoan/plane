
package com.server.plane.controller.PageBlocks;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.PageBlocks.*;

@RestController
@RequestMapping("/api/pageBlocks")
@RequiredArgsConstructor
@Tag(name = "PageBlocks")
public class PageBlocksController {

    @PostMapping
    @Operation(summary = "Create pageBlocks")
    public PageBlocksResponse create(
        @RequestBody PageBlocksCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update pageBlocks")
    public PageBlocksResponse update(
        @PathVariable Long id,
        @RequestBody PageBlocksUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete pageBlocks")
    public void delete(
        @RequestBody PageBlocksDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id pageBlocks")
    public PageBlocksResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all pageBlocks")
    public List<PageBlocksResponse> list() {
        return null;
    }
}
