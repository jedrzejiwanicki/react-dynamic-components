import { ModalSubject } from './ModalSubject';
import { DynamicComponent } from './DynamicComponent';

export const ModalProvider = (function(){
	const show = (Component, props) => {
		const currentIndex =  ModalSubject.getModalArrayLength() + 1;
		const instance = new DynamicComponent(Component, props, currentIndex);

		ModalSubject.register(instance);

		return instance;

	};

	return { show };

})();
