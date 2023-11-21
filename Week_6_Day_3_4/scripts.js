$(document).ready(function () {
    let originalPost = $("#original-post");
    let commentSection = $("#comment-section");

    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        let commentSectionTop = commentSection.offset().top;

        if (scroll >= commentSectionTop) {
            originalPost.addClass("fixed");
        } else {
            originalPost.removeClass("fixed");
        }
    });

    function addComment(comment) {
        let commentContainer = $("#comments-container");
        let newComment = $("<div>").addClass("comment").text(comment);
        let buttons = $("<div>").addClass("comment-buttons");
        buttons.append("<button class='delete-comment'>Delete</button>");
        buttons.append("<button class='edit-comment'>Edit</button>");
        newComment.append(buttons);
        commentContainer.prepend(newComment);
    }

    $("#post-comment").click(function () {
        let commentInput = $("#comment-input");
        let newCommentText = commentInput.val();
        if (newCommentText.trim() !== "") {
            addComment(newCommentText);
            commentInput.val("");
        }
    });

    $("#comments-container").on("click", ".delete-comment", function () {
        if (confirm("Are you sure you want to delete this comment?")) {
            $(this).closest(".comment").remove();
        }
    });

    $("#comments-container").on("click", ".edit-comment", function () {
        let comment = $(this).closest(".comment");
        let commentText = comment.text().trim();

        let editInput = $("<textarea>").addClass("edit-input").val(commentText);
        let submitButton = $("<button>").text("Submit").addClass("submit-edit");
     comment.empty().append(editInput).append(submitButton);
    });

    $("#comments-container").on("click", ".submit-edit", function () {
        let comment = $(this).closest(".comment");
        let editedComment = comment.find(".edit-input").val();

        comment.empty().text(editedComment);

        let buttons = $("<div>").addClass("comment-buttons");
        buttons.append("<button class='delete-comment'>Delete</button>");
        buttons.append("<button class='edit-comment'>Edit</button>");
        comment.append(buttons);
    });
});