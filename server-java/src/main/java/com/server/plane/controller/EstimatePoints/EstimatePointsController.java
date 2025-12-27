
package com.server.plane.controller.EstimatePoints;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.EstimatePoints.*;

@RestController
@RequestMapping("/api/estimatePoints")
@RequiredArgsConstructor
@Tag(name = "EstimatePoints")
public class EstimatePointsController {

    @PostMapping
    @Operation(summary = "Create estimatePoints")
    public EstimatePointsResponse create(
        @RequestBody EstimatePointsCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update estimatePoints")
    public EstimatePointsResponse update(
        @PathVariable Long id,
        @RequestBody EstimatePointsUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete estimatePoints")
    public void delete(
        @RequestBody EstimatePointsDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id estimatePoints")
    public EstimatePointsResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all estimatePoints")
    public List<EstimatePointsResponse> list() {
        return null;
    }
}
