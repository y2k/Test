/**
 * Created by y2k on 1/10/16.
 */
import org.w3c.dom.HTMLElement
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.asList
import kotlin.dom.removeFromParent

fun main(args: Array<String>) {
    if (document.readyState == "complete") filter()
    else window.onload = { filter() }
}

private fun filter() {
    document
        .getElementsByClassName("thread").asList()
        .filter {
            val text = it.getElementsByClassName("post-message")[0]?.textContent ?: ""
            StopWords.items.any { it.containsMatchIn(text) }
        }
        .forEach {
            val clickEvent = document.createEvent("MouseEvents")
            clickEvent.initEvent("click", true, true);
            it.getElementsByClassName("postbtn-hide")[0]?.dispatchEvent(clickEvent)
        }

    document
        .getElementsByClassName("post-wrapper").asList()
        .filter { it.id.startsWith("post-") && isSage(it) }
        .map { it.id.replace("post-", "") }
        .forEach { js("Post(it).hide(true)") }

    document
        .getElementsByClassName("spoiler").asList()
        .forEach { it.style.color = "#a0a0a0" }

    document
        .getElementsByClassName("post-wrapper").asList()
        .map { Message(it) }
        .forEach {
            //            it.removeFromParent()
            //            it.parentElement?.appendChild(it)

            if (it.parent != null) {

                it.element.style.marginLeft = "20px"

            }
        }
}

private fun isSage(thread: HTMLElement): Boolean {
    return thread
        .getElementsByClassName("post-email").asList()
        .any { "mailto:sage".equals(it.attributes["href"]?.value, true) }
}

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
}