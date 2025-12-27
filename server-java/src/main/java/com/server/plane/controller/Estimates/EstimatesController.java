
package com.server.plane.controller.Estimates;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.Estimates.*;

@RestController
@RequestMapping("/api/estimates")
@RequiredArgsConstructor
@Tag(name = "Estimates")
public class EstimatesController {

    @PostMapping
    @Operation(summary = "Create estimates")
    public EstimatesResponse create(
        @RequestBody EstimatesCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update estimates")
    public EstimatesResponse update(
        @PathVariable Long id,
        @RequestBody EstimatesUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete estimates")
    public void delete(
        @RequestBody EstimatesDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id estimates")
    public EstimatesResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all estimates")
    public List<EstimatesResponse> list() {
        return null;
    }
}
