
export default function Contact() {
  return (
    <section>
      <h2>Contact Me!</h2>
      <form >
        <label>
          Email:
          <input type="text" />
        </label>
        <label>
          Subject:
          <input type="text" />
        </label>
        <label>
          Message:
          <textarea />
        </label>
        <button>SEND</button>
      </form>
    </section>
  )
}