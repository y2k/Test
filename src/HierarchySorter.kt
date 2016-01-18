import java.util.*

/**
 * Created by y2k on 1/18/16.
 */
class HierarchySorter(items: List<Message>) {

    private val source = ArrayList(items)
    private val result = ArrayList<Message>()

    fun sort(): List<Message> {
        extract(0)
        return result
    }

    private fun extract(id: Int) {
        var childs = source.filter { it.parent == id }
        source.removeAll { it.parent == id }
        childs.forEach {
            result.add(it)
            extract(it.id)
        }
    }
}