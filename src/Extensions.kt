import org.w3c.dom.Document
import org.w3c.dom.HTMLElement
import kotlin.dom.asList

/**
 * Created by y2k on 1/21/16.
 */

fun Document.isThread(): Boolean {
    return location!!.pathname.contains("/res/")
}

fun HTMLElement.isSage(): Boolean {
    return this
        .getElementsByClassName("post-email").asList()
        .any { "mailto:sage".equals(it.attributes["href"]?.value, true) }
}