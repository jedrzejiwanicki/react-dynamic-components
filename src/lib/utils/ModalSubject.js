import { Subject } from './Subject';

export const ModalSubject = (function() {
	let subject = new Subject();
	let modalArray = [];

	const getModalArrayLength = () => modalArray.length;

	const register = (newModal) => {
		modalArray = [...modalArray, newModal];

		subject.next(modalArray)

	};

	const unregister = (modalIndex) => {
		modalArray = modalArray.filter(instance => instance.index !== modalIndex);

		subject.next(modalArray);
	};

	return {
		getModalArrayLength,
		subscribe: subscriber => subject.subscribe(subscriber),
		unregister,
		register,
	}
})();