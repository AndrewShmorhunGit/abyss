import styles from "@/app/styles/modal.module.scss";

export function ModalButton({
  title,
  handler,
}: {
  title: string;
  handler: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className={styles.btn} onClick={handler}>
      {title}
    </button>
  );
}
