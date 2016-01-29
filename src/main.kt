/**
 * Created by y2k on 1/10/16.
 */
import kotlin.browser.document
import kotlin.dom.asList

fun main(args: Array<String>) {
    // Показ спойлеров
    document
        .getElementsByClassName("spoiler").asList()
        .forEach { it.style.color = "#a0a0a0" }

    if (document.isThread()) {
        val posts = document
            .getElementsByClassName("post-wrapper").asList()
            .map { Message(it) }

        // Скрытие постов со сажей
        posts
            .filter { it.isSage }
            .forEach { js("Post(it.id).hide(true)") }

        // Выстраивание постов иерархически
        val rootMessage = parseInt(document.getElementById("qr-thread")!!.attributes["value"]!!.value)
        val messageParentNode = posts[0].element.parentNode!!

        HierarchySorter(posts, rootMessage)
            .sort()
            .forEach {
                it.element.style.marginLeft = "${20 * it.computeLevel(rootMessage, posts)}px"
                messageParentNode.appendChild(it.element)
            }
    } else {
        // Скрытие тредов со стоп-словами
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
    }
}