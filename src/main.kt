/**
 * Created by y2k on 1/10/16.
 */
import org.w3c.dom.HTMLElement
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.asList
import kotlin.dom.removeFromParent

fun main(args: Array<String>) {
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

    val messages = document
        .getElementsByClassName("post-wrapper").asList()
        .map { Message(it) }

    val root = parseInt(document.getElementById("qr-thread")!!.attributes["value"]!!.value)
    val messageList = messages[0].element.parentNode!!

//    messages.forEach { it.element.removeFromParent() } // FIXME:

    HierarchySorter(messages, root)
        .sort()
        .forEach {
            //            if (it.parent != 0)
            //                window.alert("PARENT = |${it.parent}|${it.element}|")
            it.element.style.marginLeft = "${20 * it.computeLevel(root, messages)}px"
            messageList.appendChild(it.element)

            //            it.element.innerHTML += "<h1>${it.parent}</h1>"
        }
}

private fun isSage(thread: HTMLElement): Boolean {
    return thread
        .getElementsByClassName("post-email").asList()
        .any { "mailto:sage".equals(it.attributes["href"]?.value, true) }
}