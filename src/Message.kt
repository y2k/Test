import org.w3c.dom.HTMLElement
import kotlin.dom.asList

/**
 * Created by y2k on 1/18/16.
 */
class Message(val element: HTMLElement) {

    val id: String
    val parent: String?

    init {
        id = element.id.replace("post-", "")
        parent = element
            .getElementsByClassName("post-message").asList()
            .flatMap { it.getElementsByClassName("post-reply-link").asList() }
            .map { it.attributes["data-num"]?.value }
            .firstOrNull()
    }

    fun computeLevel(messages: List<Message>): Int {
        if (parent == null) return 0

        var curId: String? = parent
        var level = 0
        do {
            level++
            curId = messages.firstOrNull { it.id == curId }?.parent
        } while (curId != null)
        return level
    }
}