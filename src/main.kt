/**
 * Created by y2k on 1/10/16.
 */
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.asList
import kotlin.text.Regex
import kotlin.text.RegexOption

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
        .forEach { it.hidden = true }
}