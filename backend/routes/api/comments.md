# Comments API

This file defines the API endpoints for managing comments in the Anythink Market backend.

## Endpoints

### GET `/api/comments/`
- **Description:** Fetch all comments, sorted by creation date (most recent first).
- **Response:**
  - `200 OK`: Returns an array of comment objects.
  - `500 Internal Server Error`: If there is a server error.

### DELETE `/api/comments/:id`
- **Description:** Delete a comment by its ID.
- **Parameters:**
  - `id` (URL parameter): The ID of the comment to delete.
- **Response:**
  - `200 OK`: Comment deleted successfully. Returns a message.
  - `404 Not Found`: Comment with the given ID does not exist.
  - `500 Internal Server Error`: If there is a server error.

## Error Handling
- All endpoints return a JSON object with an `error` property in case of failure.
- Errors are logged to the server console for debugging.

## Example Responses

**GET /api/comments/**
```
[
  {
    "_id": "60d21b4667d0d8992e610c85",
    "body": "Great post!",
    "author": "user123",
    "createdAt": "2025-07-08T12:34:56.789Z"
  },
  ...
]
```

**DELETE /api/comments/60d21b4667d0d8992e610c85**
```
{
  "message": "Comment deleted successfully"
}
```

**DELETE /api/comments/invalid-id**
```
{
  "error": "Comment not found"
}
```

---

For more details, see the implementation in `backend/routes/api/comments.js`.
