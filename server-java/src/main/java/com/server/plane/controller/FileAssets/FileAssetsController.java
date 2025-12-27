
package com.server.plane.controller.FileAssets;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.FileAssets.*;

@RestController
@RequestMapping("/api/fileAssets")
@RequiredArgsConstructor
@Tag(name = "FileAssets")
public class FileAssetsController {

    @PostMapping
    @Operation(summary = "Create fileAssets")
    public FileAssetsResponse create(
        @RequestBody FileAssetsCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update fileAssets")
    public FileAssetsResponse update(
        @PathVariable Long id,
        @RequestBody FileAssetsUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete fileAssets")
    public void delete(
        @RequestBody FileAssetsDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id fileAssets")
    public FileAssetsResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all fileAssets")
    public List<FileAssetsResponse> list() {
        return null;
    }
}
