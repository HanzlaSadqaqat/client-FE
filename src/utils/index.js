import { toast } from 'react-toastify';


export const handleSectionNavigation = (id) => {
  const element = document.getElementById(id);
  const offset = 45;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element?.getBoundingClientRect().top ?? 0;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};


export const handleAlert = (type, message) => {
  if (type ==='success') toast.success(message);
  if (type ==='info') toast.info(message);
  if (type ==='warning') toast.warning(message);
  if (type ==='error') toast.error(message);
}

