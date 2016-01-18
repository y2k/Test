import org.w3c.dom.HTMLElement
import kotlin.dom.asList

/**
 * Created by y2k on 1/18/16.
 */
class Message(val element: HTMLElement) : Comparable<Message> {

    val id: Int
    val parent: Int

    init {
        id = parseInt(element.id.replace("post-", ""))
        parent = element
            .getElementsByClassName("post-message").asList()
            .flatMap { it.getElementsByClassName("post-reply-link").asList() }
            .map { it.attributes["data-num"]?.value }
            .map { it?.let { parseInt(it) } }
            .firstOrNull() ?: 0
    }

    fun computeLevel(messages: List<Message>): Int {
        if (parent == 0) return 0

        var curId = parent
        var level = 0
        do {
            level++
            curId = messages.firstOrNull { it.id == curId }?.parent ?: 0
        } while (curId != 0)
        return level
    }

    override fun compareTo(other: Message): Int {
        return if (parent != other.parent) other.parent - parent else other.id - id
    }
}